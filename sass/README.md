# SCSS [Variables, Mixin, Function, Extend]
## HTML 
```html
<nav>
  <ul class="navigation">
    <li><a href="#">About us</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="buttons">
    <a class="btn-main" href="#">Sign up</a>
    <a class="btn-hot" href="#">Get a quote</a>
  </div>
</nav>
```

## SCSS
```scss
*{
  margin:0;
padding:0;
}

// =============== VARIABLES ==========
$color-primary: #f9ed69; // yellow
$color-secondary: #f08a5d; // orange
$color-tertiary: #b83b5e; // pink
$color-text-dark: #333; //  grey
$color-text-light: #eee; // white

$width-button: 150px;
// ====== END VARIABLES ====

// =============== MIXIN (@mixin) ==========
@mixin clearfix {
   &::after{
    content: "";
    clear: both;
    display: table;
  }
}

@mixin style-link-text($color){
  text-decoration: none;
  text-transform: uppercase;
  color: $color;
}
// ====== END MIXIN ====

// =============== FUNCTION (@function) ==========
@function divide($a, $b){
  @return $a/$b;
}
// ====== END FUNCTION ====


nav{
  // function call
  margin:divide(60, 2) * 1px; // we need a px result
  background-color: $color-primary;
  
  // mixin call
  @include clearfix;
}

// Nesting
.navigation{
  list-style:none;
  float: left;
  
  li{
    display: inline-block;
    margin-left:30px;
    
    &:first-child{
      margin:0;
    }
    
    a:link{
      // mixin call
      @include style-link-text($color-text-dark);
    }
    
  }
}

.buttons{
  float: right;
}

// =============== EXTENDS (%) ==========
%btn-placeholder{
  padding:10px;
  display: inline-block;
  text-align:center;
  border-radius:100px;
  width: $width-button;
  
  // mixin call
  @include style-link-text($color-text-light);
}
// ====== END EXTEND ====

.btn-main{
  &:link{
    // extend call
    @extend %btn-placeholder;
    background-color:$color-secondary;
  }
  &:hover{
      // function
    background-color:darken($color-secondary, 15%);
  }
}
.btn-hot{
  &:link{
    // extend call
    @extend %btn-placeholder;
    background-color:$color-tertiary;
  }
  &:hover{
    // function
    background-color:lighten($color-tertiary, 10%);
  }
}
```
