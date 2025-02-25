import { registerPlugin, type RPCCallPayload } from '@pexip/plugin-api'

const plugin = await registerPlugin({
  id: 'stop-presenter',
  version: 0
})

const stopPresButtonPayload: RPCCallPayload<'ui:button:add'> = {
  position: 'toolbar',
  tooltip: 'Stop presentation',
  icon: 'IconPresentationOff',
  roles: ['chair']
}

let stopPresButton: ToolbarButton | null = null
let me: InfinityParticipant | null = null

plugin.events.me.add(({ participant }) => {
  me = participant
})

const stealPresentation = async (): Promise<void> => {
  if (me) {
    const payload = {
      path: "participants/" + me.uuid + "/take_floor",
      method: "POST",
      payload: {}
    }
    plugin.conference.sendRequest(payload)
      .then(() => {
        setTimeout(async () => {
          const payload = {
            path: "participants/" + me.uuid + "/release_floor",
            method: "POST",
            payload: {}
          }
          await plugin.conference.sendRequest(payload)
        }, 2000)
      })
  }
}
 
plugin.events.participants.add(async ({ participants }) => {
  const presenters = participants
    .filter((participant) => participant.isPresenting)
    .map((participant) => participant.uuid)

  if (presenters.length > 0 && presenters[0] != me.uuid && !stopPresButton) {
    stopPresButton = await plugin.ui.addButton(stopPresButtonPayload)
    stopPresButton.onClick.add(async () => {
      stealPresentation()
    })
  } else if (stopPresButton) {
    stopPresButton.remove()
    stopPresButton = null
  }
})
