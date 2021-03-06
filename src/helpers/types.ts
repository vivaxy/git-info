/**
 * @since 2019-07-31 14:44
 * @author vivaxy
 */
import * as execa from 'execa';

export type Stdio =
  | 'pipe'
  | 'ignore'
  | 'inherit'
  | readonly execa.StdioOption[];

export interface FileStatus {
  filename: string;
  diffType: 'A' | 'C' | 'D' | 'M' | 'R' | 'T' | 'U' | 'X' | 'B';
}
