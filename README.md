<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a showcase of the Gladia API. It consists of a simple application with user authentication. When the user is signed in, he can proceed to payment and finally access the transcription page where the magic can happen.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]

<!-- GETTING STARTED -->

## Getting Started

To get started, go through the following steps:

### Prerequisites

You will obviously need yarn (available at [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)) or npm to install the dependencies and Docker to pull the redis image

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free Gladia API Key at [https://example.com](https://example.com)
2. Get a free Stripe API Key at [https://stripe.com/fr](https://stripe.com/fr)
3. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API keys in `.env.local` at the root of the project
   ```js
   NEXT_PUBLIC_STRIPE_KEY = 'ENTER YOUR PUBLIC STRIPE API KEY';
   STRIPE_SECRET_KEY = 'ENTER YOUR SECRET STRIPE API KEY';
   NEXT_PUBLIC_GLADIA_API_KEY = 'ENTER YOUR GLADIA API KEY';
   ```
6. Run the project
   ```sh
   yarn start
   ```
7. Once the app is running, you can log in with the following credentials "username: user" and "password: password"

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
