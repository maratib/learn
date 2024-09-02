# Angular

## `imports`

`imports` makes the `exported declarations` of other modules available in the `current module`

## `declarations`

`declarations` are to make `directives` from `the current module available` to other directives in the `current module`. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.

## `providers`

`providers` are to make services and values known to DI (dependency injection). They are added to the root scope and they are injected to other services or directives that have them as dependency.

`A special case for providers` are `lazy loaded modules` that get `their own child injector`. Providers of a lazy loaded module are only provided to this lazy loaded module by default (not the whole application as it is with other modules).

## `exports`

`exports` makes the components, directives, and pipes available in modules that add this module to imports. exports can also be used to re-export modules such as CommonModule and FormsModule, which is often done in shared modules.

## `entryComponents`

`entryComponents` registers components for offline compilation so that they can be used with ViewContainerRef.createComponent(). Components used in router configurations are added implicitly.
