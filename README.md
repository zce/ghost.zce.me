# zce.me

> zce.me site

## Usage

### Development

```sh
# clone this repo & submodule
$ git clone https://github.com/zce/zce.me.git --recurse-submodules

# install deps
$ yarn # or npm i

# link storage module
$ ln -s $PWD/node_modules/qiniu-store content/adapters/storage/qiniu

# start ghost server
$ yarn start

# or start ghost server with nodemon
$ yarn dev
```

## Themes

- https://github.com/TryGhost/Casper
- https://github.com/TryGhost/Starter
- https://github.com/TryGhost/London
- https://github.com/TryGhost/Editorial
- https://github.com/TryGhost/Massively
- https://github.com/TryGhost/Blog
- https://github.com/godofredoninja/Mapache
- https://github.com/godofredoninja/Paway
- https://github.com/godofredoninja/simply
- https://github.com/JustGoodThemes/Scriptor-Ghost-Theme
- https://github.com/Reedyn/Saga
- https://github.com/xiaoluoboding/ghost-theme-kaldorei
- https://github.com/epistrephein/Steam
- https://github.com/ddiu8081/ghost-theme-Moegi

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)
