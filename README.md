<img src="https://i.imgur.com/EnAmPfX.png" alt="Banner for repo">

# sv-client

The client side of the StrategyVault project.  
For full repo and details about the project, including the project roadmap, see [here](https://github.com/ncn-ends/StrategyVault).

## About

### Dependencies

- React and NextJS are used as the core UI framework.
- Redux is used as the state management system, with preference for using the context API as minimally as possible. Local state is still used when possible.
- Tailwind was chosen for benefit of increased development speed and organization. When possible, Tailwind directives are preferred over polluting markup with too many class names, with the acknowledgement of the caveats of this.
- DaisyUI was chosen for the POC and MVP stages to speed up development, with the intention of replacing it with an in-house component library eventually.
- PostCSS would be used with or without Tailwind due to several benefits such as standardized nesting.
- Jest, cypress, react testing library, and storybook are used for testing. Eslint, TypeScript, and Prettier are used to maintain coding standards and consistency.

### Structure

- File structure is based on atomic design and MVVC architecture, where each page has its own folder. 
  - The index of each page acts as the controller, which delegates business logic and passes to a page view component.
  - Components are not refactored strictly for reuseability, but also encapsulation, readability, and maintainability.
    - There is a `common/components` folder, as well as a `components` folder for each page. If a component would only ever be used for that page, then it would be placed in its own `components` directory.
  - Each page has its own directory for utilities or other functions
  - File structure for Redux components is standard.

### Testing

- Testing is pretty minimal during the MVP / POC stages, primarily focused on testing the state layer at this point. [View the roadmap on the StrategyVault repo](https://github.com/ncn-ends/StrategyVault) to find out more info about the different stages of the project.

## Usage

### Configuration

- Follow the setup process for API and Auth portion of StrategyVault
  - See repos here:
    - API: https://github.com/ncn-ends/sv-api
    - Auth: https://github.com/ncn-ends/sv-auth
- Copy `.env.example` at project root to `.env.local` and replace values with their real values

### Development

```
yarn install
```
- At project root to install dependencies

```
yarn dev
```
- At project root to start dev server

Any merges or pushes to `master` branch will automatically be deployed to Azure.

## Authors

- [@ncn-ends](https://www.github.com/ncn-ends)


## License

[MIT](https://choosealicense.com/licenses/mit/)

