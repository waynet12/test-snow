import {
  StringColumn,
  Table,
} from '@servicenow/sdk/core'

/**
 * Hello World table: x_hello_world_message
 * Creates a simple table with one string column for the message.
 */
export const x_hello_world_message = Table({
  name: 'x_hello_world_message',
  label: 'Hello World Message',
  schema: {
    message: StringColumn({ label: 'Message', mandatory: true }),
  },
})
