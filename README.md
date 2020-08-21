# Email Service (Beta)

### Quick Setup 
(make sure you have [Node]('https://nodejs.org/en/download/') installed)

- `git clone` this directory.
- run `yarn install` or `npm install` inside the directory.
- Add your `account.json` file in the `config` folder.
    
    > **NOTE:** Make sure the email account you're using enables 3rd party apps.
    (**Especially for
        [Gmail]('https://myaccount.google.com/lesssecureapps)**)

    A sample `account.json` looks like this:
    ```
    {
        "user": "sampleuser@outlook.com",
        "pass": "samplepass0"
    }
    ```

- Run `yarn dev` or `npm run dev`

##
### Sending mails
Once the `server` is up and running you can send a request to the `/` endpoint with a `JSON body` like below:

```
{
    "to: "yourfriend@gmail.com",
    "subject": "Sample Subject",
    "message": "Hey there! How are you?"
}
```

##
### Testing
- Make sure **[REST Client]('https://marketplace.visualstudio.com/items?itemName=humao.rest-client')** is installed (VSCode).
- Got to `testmail.json` to customize your test email.
- Go to `test/send.http` and send the request.
    (Alternatively, you can copy the **cURL** command and execute it in the terminal.)

##