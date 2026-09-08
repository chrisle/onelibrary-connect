# Changelog

## v1.1.5

- ci: CI comes from the shared connector-ci workflows


## v1.1.4

- fix: the SQLite driver is built again under npm 12, which blocks install scripts by default
- ci: OneLibrary connector releases reach npm again instead of failing on every push


## v1.1.3

- build: bump better-sqlite3-multiple-ciphers to 12.11.1 for Electron 43
- chore: require better-sqlite3-multiple-ciphers ^12.9.0 for Electron 43


## v1.1.2

- chore: drop transient peer:true flags from lock file


## v1.1.0

- fix(ci): publish no longer fails when several connect repos release together
- ci: publish onelibrary-connect to npm on push to main
- chore: update lockfile
- chore: update lockfile
- feat: initial onelibrary-connect package

