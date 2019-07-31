/**
 * @since 2019-07-31 14:37
 * @author vivaxy
 */
import * as execa from 'execa';
import { Stdio } from '../helpers';

export default async function add({
  cwd,
  stdio = 'inherit',
}: {
  cwd: string;
  stdio?: Stdio;
}): Promise<void> {
  await execa('git', ['add', '.'], { stdio, cwd });
}
