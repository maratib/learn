# KeyCloak

Keycloak is an open source `Identity and Access Management tool`  
with a strong focus on making it easier for developers to secure their application such as `single-page applications, mobile applications, and REST APIs`.

Keycloak is a lightweight and easy-to-install solution. It is highly scalable and provides high availability through clustering capabilities.

It is used in production for scenarios ranging from small websites with only a handful of users up to large enterprises with millions of users.

Keycloak provides fully customizable login pages, including support for strong authentication, and built-in capabilities such as the recovery of passwords, requiring users to regularly update their passwords, accepting terms and conditions, and a lot more. All of this without any need to add anything to your applications, or any coding at all.  

All pages visible to your users support custom themes, making it very easy to modify the look and feel of the pages to integrate with your corporate branding and existing applications.

By delegating authentication to Keycloak, your applications do not need to worry about differ- ent authentication mechanisms, or how to safely store passwords. This approach also provides a higher level of security as applications do not have direct access to user credentials; they are instead provided with security tokens that give them only access to what they need.

When it comes to authentication, Keycloak supports a wide range of authentication factors, al- lowing you to easily enable Multi-Factor Authentication (MFA) and Strong Authentication (SA) for your applications.

Keycloak builds on industry-standard protocols supporting OAuth 2.0, OpenID Connect, and SAML 2.0. Using industry-standard protocols is important from both a security perspective and in terms of making it easier to integrate with existing and new application.

Keycloak comes with its own user database, which makes it very easy to get started. You can also easily integrate with existing identity infrastructure. Through its identity brokering capabilities, you can plug in existing user bases from social networks, or other enterprise identity providers. It can also integrate with existing user directories, such as `Active Directory` and `LDAP servers`.

A lot of effort has gone into making Keycloak usable out of the box, supporting common use cases, but, at the same time, it is highly customizable and extendable when needed. Keycloak has a large number of extension points where you can implement and deploy custom code to Keycloak to modify existing behavior or add completely new capabilities. Examples of extensions that can be written to Keycloak include custom authentication mechanisms, integrations with custom user stores, and the custom manipulation of tokens. You can even implement your own custom login protocols.