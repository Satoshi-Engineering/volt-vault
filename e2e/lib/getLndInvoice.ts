import { exec } from 'node:child_process'
import assert from 'node:assert'
import { promisify } from 'node:util'

export const getLndInvoice = async ({
  amount = 2000,
}: {
  amount: number,
} = { amount: 2000 }) => {
  const execAsync = promisify(exec)
  const { stdout, stderr } = await execAsync(`docker exec lnd_other_node lncli --network=regtest addinvoice --amt ${amount}`)
  assert(!stderr, `There should be no error creating a lightning invoice ${stderr}`)
  const paymentRequest = JSON.parse(stdout).payment_request
  return paymentRequest
}
