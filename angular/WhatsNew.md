# Angular Whats new in Angular 18

## New template syntax

<table>
<tr>
<td>
<pre>@for (item of items; track item.id; let idx = $index, let e = $even) 
{
  Item #{{ idx }}: {{ item.name }}
}</pre>
</td>
<td>
<pre>@for (item of items; track item.id) 
{
  {{ item }}
} 
@empty 
{
  There were no items in the list.
}</pre>
</td>
</tr>
<tr>
<td><pre>@if (cond.expr) 
{
  Main case was true!
} 
@else if (other.expr) 
{
  Extra case was true!
} 
@else 
{
  False case!
}</pre></td>
<td><pre>
@switch (condition)
{
  @case (caseA) 
  {
    Case A.
  }
  @case (caseB) 
  {
    Case B.
  }
  @default 
  {
    Default case.
  }
}</pre></td>
</tr>
</table>
