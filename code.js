var is_Cloud = true;

//  Install Buttons
function CloudInstall(){
  const BUTTON = document.getElementById('cloud-button');
  const CLOUD = document.getElementById("cloud-desc");
  const LOCAL = document.getElementById('local-desc');
  BUTTON.classList.add('hidden');
  CLOUD.style.flexBasis = '100%';
  LOCAL.classList.add('hidden');

  const LAYOUT = document.getElementById('layout-choice');
  LAYOUT.style.animation = 'slide-down 300ms ease-in-out';
  LAYOUT.classList.remove('hidden');
  is_Cloud=true;
}
function LocalInstall(){
  const BUTTON = document.getElementById("local-button");
  const CLOUD = document.getElementById("cloud-desc");
  const LOCAL = document.getElementById('local-desc');
  BUTTON.classList.add('hidden');
  LOCAL.style.marginLeft = 'auto';
  LOCAL.style.flexBasis = '100%';
  CLOUD.classList.add('hidden');

  const LAYOUT = document.getElementById('layout-choice');
  LAYOUT.style.animation = 'slide-down 300ms ease-in-out';
  LAYOUT.classList.remove('hidden');
  is_Cloud=false;
}

//  Layout Buttons
function Layout(layout){
  const INLINE = document.getElementById('inline-option');
  const STACK = document.getElementById('stack-option');
  const STACK_BUTTON = document.getElementById('stacked-button');
  const INLINE_BUTTON = document.getElementById('inline-button');
  const CLOUD_INLINE = document.getElementById('cloud-inline');
  const CLOUD_STACK = document.getElementById('cloud-stacked');
  const LOCAL_INLINE = document.getElementById('local-inline');
  const LOCAL_STACK = document.getElementById('local-stacked');
  const USAGE = document.getElementById('usage-section');

  if(is_Cloud===true){
    if(layout===0){
      INLINE.classList.add('hidden');
      STACK_BUTTON.classList.add('hidden');
      STACK.style.flexBasis = '100%';
      CLOUD_STACK.classList.remove('hidden');
    }
    else{
      STACK.classList.add('hidden');
      INLINE_BUTTON.classList.add('hidden');
      INLINE.style.flexBasis = '100%';
      CLOUD_INLINE.classList.remove('hidden');
    }
  }
  else{
    if(layout===0){
      INLINE.classList.add('hidden');
      STACK_BUTTON.classList.add('hidden');
      STACK.style.flexBasis = '100%';
      LOCAL_STACK.classList.remove('hidden');
    }
    else{
      STACK.classList.add('hidden');
      INLINE_BUTTON.classList.add('hidden');
      INLINE.style.flexBasis = '100%';
      LOCAL_INLINE.classList.remove('hidden');
    }
  }
  USAGE.classList.remove('hidden');
}
