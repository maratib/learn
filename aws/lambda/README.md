# AWS Lambda

`AWS Lambda` is a serverless compute service that lets you run your code without provisioning or managing servers. Lambda automatically scales and manages your applications, so you can build applications that automatically respond to changes in demand.

## `Key Concepts`

**`Functions`** Lambda functions are the core unit of Lambda. They are blocks of code written in a supported runtime and are invoked in response to an event.

**`Triggers`** Events that cause Lambda functions to start executing. Examples of triggers are API Gateway, S3, and CloudWatch Events.

**`Layers`** Lambda layers are a distribution mechanism for function code and dependencies. You can use them to manage and share common code across multiple functions.

**`Runtime`** A language-specific environment that runs your Lambda function. AWS provides runtimes for several programming languages, including Python, go, Node.js, Java, and more.

**`Cold Start`** The initial execution of a Lambda function when a new container is created to handle the request. This typically results in higher latency.

## `Lambda Function Components`

**`Handler`** The entry point of your Lambda function. The handler processes the event and returns a response.

**`Event Object`** Contains information about the trigger event that initiated the Lambda function.

**`Context Object`** Contains information about the runtime and function execution environment.

## `Getting Started`

1. Create a Lambda function using the AWS Management Console, AWS CLI, or an SDK.
2. Add a trigger to automatically invoke the function or invoke it manually using the AWS CLI, SDK, or Lambda console.
3. Monitor function execution with Amazon CloudWatch Logs.

## `Getting started example Commands`

**`Create a Lambda function:`**

```bash
aws lambda create-function --function-name <function_name> --runtime <runtime> --role <role_arn> --handler <handler> --zip-file fileb://<code_zip>
```

**`Invoke a Lambda function:`**

```bash
aws lambda invoke --function-name <function_name> --payload <input_json> <output_file>
```

**`Add a trigger to a Lambda function:`**

```bash
aws lambda create-event-source-mapping --function-name <function_name> --event-source-arn <event_source_arn>
```

**`List Lambda functions:`**

```bash
aws lambda list-functions
```

**`Delete a Lambda function:`**

```bash
   aws lambda delete-function --function-name <function_name>
```

**`IAM Permissions:`** Ensure your Lambda function has the necessary permissions by attaching IAM policies to the function's execution role. This allows your function to interact with other AWS services.

**`Monitoring and Logging:`** Lambda automatically integrates with Amazon CloudWatch for logging and monitoring. Check the CloudWatch Logs for your function's execution logs and CloudWatch Metrics for monitoring performance and errors.

**`Pricing:`** AWS Lambda pricing is based on the number of requests and the duration of function execution. You only pay for the compute time that you actually use. There is a generous free tier available.

Here's a table with 30 useful AWS Lambda commands for engineers:

<table> <thead> <tr> <th role="columnheader">#</th> <th role="columnheader">Command</th> <th role="columnheader">Description</th> </tr> </thead> <tbody> <tr> <td>1</td> <td><code>aws lambda create-function</code></td> <td>Create a new Lambda function</td> </tr> <tr> <td>2</td> <td><code>aws lambda update-function-code</code></td> <td>Update a Lambda function's code</td> </tr> <tr> <td>3</td> <td><code>aws lambda delete-function</code></td> <td>Delete a Lambda function</td> </tr> <tr> <td>4</td> <td><code>aws lambda list-functions</code></td> <td>List all Lambda functions</td> </tr> <tr> <td>5</td> <td><code>aws lambda get-function</code></td> <td>Get information about a specific Lambda function</td> </tr> <tr> <td>6</td> <td><code>aws lambda invoke</code></td> <td>Invoke a Lambda function</td> </tr> <tr> <td>7</td> <td><code>aws lambda create-event-source-mapping</code></td> <td>Create a new event source mapping for a Lambda function</td> </tr> <tr> <td>8</td> <td><code>aws lambda update-event-source-mapping</code></td> <td>Update an existing event source mapping for a Lambda function</td> </tr> <tr> <td>9</td> <td><code>aws lambda delete-event-source-mapping</code></td> <td>Delete an event source mapping for a Lambda function</td> </tr> <tr> <td>10</td> <td><code>aws lambda list-event-source-mappings</code></td> <td>List all event source mappings for a Lambda function</td> </tr> <tr> <td>11</td> <td><code>aws lambda list-tags</code></td> <td>List all tags for a Lambda function</td> </tr> <tr> <td>12</td> <td><code>aws lambda tag-resource</code></td> <td>Add tags to a Lambda function</td> </tr> <tr> <td>13</td> <td><code>aws lambda untag-resource</code></td> <td>Remove tags from a Lambda function</td> </tr> <tr> <td>14</td> <td><code>aws lambda list-versions-by-function</code></td> <td>List all versions of a Lambda function</td> </tr> <tr> <td>15</td> <td><code>aws lambda publish-version</code></td> <td>Publish a new version of a Lambda function</td> </tr> <tr> <td>16</td> <td><code>aws lambda create-alias</code></td> <td>Create an alias (new) for a Lambda function</td> </tr> <tr> <td>17</td> <td><code>aws lambda update-alias</code></td> <td>Update an existing alias for a Lambda function</td> </tr> <tr> <td>18</td> <td><code>aws lambda delete-alias</code></td> <td>Delete an alias for a Lambda function</td> </tr> <tr> <td>19</td> <td><code>aws lambda list-aliases</code></td> <td>List all aliases for a Lambda function</td> </tr> <tr> <td>20</td> <td><code>aws lambda get-alias</code></td> <td>Get information about a specific alias for a Lambda function</td> </tr> <tr> <td>21</td> <td><code>aws lambda get-policy</code></td> <td>Get the resource policy of a Lambda function</td> </tr> <tr> <td>22</td> <td><code>aws lambda add-permission</code></td> <td>Add a permission to a Lambda function's resource policy</td> </tr> <tr> <td>23</td> <td><code>aws lambda remove-permission</code></td> <td>Remove a permission from a Lambda function's resource policy</td> </tr> <tr> <td>24</td> <td><code>aws lambda create-layer-version</code></td> <td>Create a new version of a Lambda layer</td> </tr> <tr> <td>25</td> <td><code>aws lambda list-layer-versions</code></td> <td>List all versions of a Lambda layer</td> </tr> <tr> <td>26</td> <td><code>aws lambda delete-layer-version</code></td> <td>Delete a specific version of a Lambda layer</td> </tr> <tr> <td>27</td> <td><code>aws lambda list-layers</code></td> <td>List all Lambda layers</td> </tr> <tr> <td>28</td> <td><code>aws lambda get-layer-version</code></td> <td>Get information about a specific version of a Lambda layer</td> </tr> <tr> <td>29</td> <td><code>aws lambda update-function-configuration</code></td> <td>Update a Lambda function's configuration (memory, timeout, etc.)</td> </tr> <tr> <td>30</td> <td><code>aws lambda put-function-concurrency</code> / <code>aws lambda delete-function-concurrency</code></td> <td>Set or delete a Lambda function's reserved concurrency</td> </tr> </tbody> </table>

These commands can be used with the AWS Command Line Interface (CLI) to manage and interact with your AWS Lambda functions, layers, and related resources. Remember to replace the necessary placeholders (like <function_name> or <runtime>) with your own values when using the commands.

These additional commands extend your ability to manage various aspects of AWS Lambda, such as function configurations, provisioned concurrency, event invoke configurations, and code signing configurations. As before, replace the necessary placeholders with your own values when using the commands.

<table> <thead> <tr> <th role="columnheader">#</th> <th role="columnheader">Command</th> <th role="columnheader">Description</th> </tr> </thead> <tbody> <tr> <td>31</td> <td><code>aws lambda get-function-configuration</code></td> <td>Get the configuration of a specific Lambda function</td> </tr> <tr> <td>32</td> <td><code>aws lambda list-provisioned-concurrency-configs</code></td> <td>List all provisioned concurrency configurations for a Lambda function</td> </tr> <tr> <td>33</td> <td><code>aws lambda put-provisioned-concurrency-config</code></td> <td>Set the provisioned concurrency configuration for a Lambda function</td> </tr> <tr> <td>34</td> <td><code>aws lambda delete-provisioned-concurrency-config</code></td> <td>Delete a provisioned concurrency configuration for a Lambda function</td> </tr> <tr> <td>35</td> <td><code>aws lambda get-provisioned-concurrency-config</code></td> <td>Get a provisioned concurrency configuration for a Lambda function</td> </tr> <tr> <td>36</td> <td><code>aws lambda get-account-settings</code></td> <td>Get the account-level settings for Lambda, such as resource limits</td> </tr> <tr> <td>37</td> <td><code>aws lambda list-function-event-invoke-configs</code></td> <td>List event invoke configurations for a Lambda function</td> </tr> <tr> <td>38</td> <td><code>aws lambda get-function-event-invoke-config</code></td> <td>Get the event invoke configuration for a Lambda function</td> </tr> <tr> <td>39</td> <td><code>aws lambda put-function-event-invoke-config</code></td> <td>Create or update an event invoke configuration for a Lambda function</td> </tr> <tr> <td>40</td> <td><code>aws lambda delete-function-event-invoke-config</code></td> <td>Delete an event invoke configuration for a Lambda function</td> </tr> <tr> <td>41</td> <td><code>aws lambda put-function-code-signing-config</code></td> <td>Create or update a code signing configuration for a Lambda function</td> </tr> <tr> <td>42</td> <td><code>aws lambda get-function-code-signing-config</code></td> <td>Get the code signing configuration for a Lambda function</td> </tr> <tr> <td>43</td> <td><code>aws lambda list-code-signing-configs</code></td> <td>List all code signing configurations for Lambda functions</td> </tr> <tr> <td>44</td> <td><code>aws lambda delete-function-code-signing-config</code></td> <td>Delete a code signing configuration for a Lambda function</td> </tr> <tr> <td>45</td> <td><code>aws lambda list-functions-by-code-signing-config</code></td> <td>List all Lambda functions associated with a specific code signing configuration</td> </tr> </tbody> </table>

These commands will help you manage concurrency configurations and policies related to event sources, filter Lambda functions by the runtime or layer version, and manage dead-letter queue configurations.

<table> <thead> <tr> <th role="columnheader">#</th> <th role="columnheader">Command</th> <th role="columnheader">Description</th> </tr> </thead> <tbody> <tr> <td>46</td> <td><code>aws lambda list-function-concurrency-configs</code></td> <td>List the concurrency configurations for a Lambda function</td> </tr> <tr> <td>47</td> <td><code>aws lambda get-policy-by-event-source</code></td> <td>Get the resource policy associated with an event source for a Lambda function</td> </tr> <tr> <td>48</td> <td><code>aws lambda list-functions-by-runtime</code></td> <td>List all Lambda functions with a specific runtime</td> </tr> <tr> <td>49</td> <td><code>aws lambda list-functions-by-layer-version</code></td> <td>List all Lambda functions that use a specific layer version</td> </tr> <tr> <td>50</td> <td><code>aws lambda put-function-dlq-config</code></td> <td>Create or update a dead-letter queue configuration for a Lambda function</td> </tr> <tr> <td>51</td> <td><code>aws lambda get-function-dlq-config</code></td> <td>Get the dead-letter queue configuration for a Lambda function</td> </tr> <tr> <td>52</td> <td><code>aws lambda delete-function-dlq-config</code></td> <td>Delete a dead-letter queue configuration for a Lambda function</td> </tr> <tr> <td>53</td> <td><code>aws lambda list-function-dlq-configs</code></td> <td>List all dead-letter queue configurations for Lambda functions</td> </tr> </tbody> </table>

## `Keep in mind:`

AWS is continuously evolving, and new features or commands may be added. It's always a good idea to consult the official AWS CLI documentation for the most up-to-date information on available commands: [https://docs.aws.amazon.com/cli/latest/reference/lambda/index.html](https://docs.aws.amazon.com/cli/latest/reference/lambda/index.html)
