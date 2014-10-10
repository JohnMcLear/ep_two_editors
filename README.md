# Two Editors in One Etherpad Window *Mind Blo2\nm

Your seperate editor MUST be on a different Etherpad instance, you can run two instances on seperate ports quite easily.

In your `settings.json`, add:

## To change your host - This is compulsary

```
    "ep_two_editors" {
        "host": "your.ethertwo_editorshost.com"
    }

    # Example
    "ep_two_editors" {
        "host": "localhost:9002"
    }
```
## To enable by Default

```
    "ep_two_editors" {
        "onByDefault": true
    }
```

## To change the icon

```
    "ep_two_editors" {
        "icon": "http://myicon.com/awesomeicon.png"
    }
```

## To put the icon on the right hand side of the toolbar
```
    "ep_two_editors" {
        "position": "right"
    }
```



todo
====

1. Makle it work
