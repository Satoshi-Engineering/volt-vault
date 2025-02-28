import { exec } from 'node:child_process'
import assert from 'node:assert'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

type LndNodeCommand = 'start' | 'stop'

const executeLndCommand = async (command: LndNodeCommand) => {
  if (command === 'start') {
    const { stdout, stderr } = await execAsync('docker start lnd')
    assert(!stderr, `There should be no error starting a lightning node ${stderr}`)
    return stdout
  }
  if (command === 'stop') {
    const { stdout, stderr } = await execAsync('docker stop lnd')
    assert(!stderr, `There should be no error stopping a lightning node ${stderr}`)
    return stdout
  }
  assert(false, `Unknown command ${command}`)
}

const startLndNode = async () => {
  return await executeLndCommand('start')
}

const stopLndNode = async () => {
  return await executeLndCommand('stop')
}

export default {
  startLndNode,
  stopLndNode,
  executeLndCommand,
}
