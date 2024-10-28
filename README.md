# Quick SaaS
This is a SaaS boilerplate which has been built using Nextjs framework. Quick-SaaS is a GPT-based bolierplate which could help you to turn your SaaS idea into an actual web app really fast.
However, you need to understand that your idea should fit into the project's structure. You'll learn more about this but first let's run the project.

## Getting Started

### Step 1: Have the project on your computer
Get the project:
- Create a GitHub account
- Fork the repository into your GitHub accout
- Configure the ssh keys
- Clone the forked repository to your local machine

This is the best way to get the project, because later on, you want to deploy your project into Vercel or other could services. 

### Step 2: Add necessary keys to .env
- Copy `.env.local.sample` file as `.env.local`.
- Create Google Recaptch V2 Public and Secret keys by going to https://www.google.com/recaptcha/admin/create. Now, update `NEXT_PUBLIC_RECAPCHA_SITE_KEY` and `RECAPCHA_SECRET_KEY` with your values.
- Create an OpenAI account and update `OPENAI_API_KEY` with the key you get from OpenAI. 

### Step 3: Run the project
- Make sure you have nodeJS (plus npm) installed on your OS.
- Install the node packages by running:
```bash
npm install
```
- Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Quick-SaaS sample project.

## Turn Your Idea Into A Web App
Now, that you have succeeded to run the project, it's time to implement your idea and turn it into an actual app.
However, you need to come up with an idea within the structure of Quick-SaaS project. 
The base idea of the project is like this. The project includes an input box and a button. We get the user's data through that input box and then execute the GPT prompts in the backend as soon as the user clicks on the submit button.
For instance, the default idea in Quick-SaaS project is a simple user feedback checker. A user enteres a comment or feedback, then the app gives back an analysis of the comment. 
Now by changing the gpt prompts and the result dashboard UI a little bit, you can come up with another SaaS idea. 
For example, you can expect the user to enter a piece of code, then change the prompts to check the user's input code based on best practices and give back an analysis and a score for making the code better.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
