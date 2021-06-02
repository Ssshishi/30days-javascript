// 获取.control中所有input 
const inputs = document.querySelectorAll('.controls input') ;

function handleUpdate () {
  // 获取DOM元素 自定义属性data-sizing
  const suffix = this.dataset.sizing || '' ;
  // 设置样式属性 setProperty
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  document.getElementById(`label_${this.name}`).innerText = this.value + suffix ;

}

inputs.forEach(input => input.addEventListener('change',handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
