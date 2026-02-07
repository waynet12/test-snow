import { BusinessRule } from '@servicenow/sdk/core'
import { x_hello_world_message } from './hello-table.now'

/**
 * Business Rule: Log Message on Insert
 * Triggers after a new record is inserted into x_hello_world_message.
 */
BusinessRule({
  $id: Now.ID['x_hello_world_log_message'],
  name: 'Log Message on Insert',
  table: x_hello_world_message,
  action: ['insert'],
  when: 'after',
  script: `
    (function executeRule(current, previous /*null when async*/) {
        gs.info('New message created: ' + current.message);
    })(current, previous);
  `,
})
