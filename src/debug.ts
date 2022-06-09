import * as core from '@actions/core'

export function debug(title: string, content: any) {
  if (true) {
    core.info(`::group::${title}`)
    core.debug(JSON.stringify(content, null, 3));
    core.info('::endgroup::')
  }
}