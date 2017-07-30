# ember-rrssb

Ember addon for Ridiculously Responsive Social Sharing Buttons.
This addon is created from [https://github.com/kni-labs/rrssb](https://github.com/kni-labs/rrssb)
<img src="http://rrssb.ml/media/rrssb-preview.gif" width="100%" height="auto"/>

## Installation

* `ember install ember-rrssb`

## Available socail share button

* email  
* facebook
* tumblr
* linkedin
* xing
* twitter
* reddit
* vk
* googleplus
* pocket
* pinterest

## Options

* shareUrl
 `if shareUrl is not given by user, it will automatically shares current Url.`

## Usage

* Example One :
```hbs
{{e-rrssb
  email=true  
  facebook=true
  tumblr=true
  linkedin=true}}
```

* Example Two :
```hbs
{{e-rrssb
  shareUrl="https://www.emberaddons.com/?page=2"
  email=true  
  facebook=true
  tumblr=true
  linkedin=true
  xing=true
  twitter=true
  reddit=true
  vk=true
  googleplus=true
  pocket=true
  pinterest=true}}
```
