/**
 * @since 2019-06-27 11:06
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getRevCount({
  from,
  to = 'HEAD',
  paths,
  cwd,
}: {
  from?: string;
  to?: string;
  paths?: string[];
  cwd: string;
}): Promise<number> {
  let sha = `${from}...${to}`;
  if (!from) {
    sha = to;
  }
  let args = ['rev-list', '--count', sha];
  if (paths) {
    args.push('--', ...paths);
  }
  const { exitCode, stdout } = await betterExeca('git', args, { cwd });
  if (exitCode === 0) {
    return Number(stdout);
  }
  return Infinity;
}