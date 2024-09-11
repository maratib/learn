# Spring Security

## What is the `Spring Security`?

`Spring Security` is a framework which provides various security features like: authentication, authorization to create secure Java Enterprise Applications.

It is a sub-project of Spring framework and available as a

## What is the difference between `XSS and CSRF`?

`XSS Cross-site scripting` allows an attacker to execute arbitrary JavaScript within the browser of a victim user.

`CSRF Cross-site request forgery` allows an attacker to induce a victim user to perform actions that they do not intend to.

The consequences of XSS vulnerabilities are generally more serious than for CSRF vulnerabilities:

CSRF often only applies to a subset of actions that a user is able to perform. Many applications implement CSRF defenses in general but overlook one or two actions that are left exposed. Conversely, a successful XSS exploit can normally induce a user to perform any action that the user is able to perform, regardless of the functionality in which the vulnerability arises.

`CSRF` can be described as a `one-way` vulnerability, in that while an attacker can induce the victim to issue an HTTP request, they cannot retrieve the response from that request.

`XSS` is `two-way`, in that the attacker's injected script can issue arbitrary requests, read the responses, and exfiltrate data to an external domain of the attacker's choosing.
