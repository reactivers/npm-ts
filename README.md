# Installation
```
npx @reactivers/npm-ts my-component
```

# Getting Started
- Edit `package.json`
- Create your components under `src/components`.
- Create your styles to under `src/styles`.
- Export the components and the styles you want to build into `src/index.ts`. 
    - Make sure all of them are `exported`!.
- Then run
```
npm run build
```
- Check `dist` folder

> Note!.
- Don't forget to edit `package.json`!
- Don't forget to edit `README.md`!

- To publish the package
```
npm publish --access=public
```