import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | replaceBr:\n }}
 *   formats to: 1024
 */
@Pipe({name: 'br'})
export class BrPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br/>')
  }
}