import { Record } from '@servicenow/sdk/core'

/**
 * Inserts a single "Hello World" record into x_hello_world_message.
 */
Record({
  table: 'x_hello_world_message',
  $id: Now.ID['x_hello_world_hello_record'],
  data: {
    message: 'Hello World',
  },
})
