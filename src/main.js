const div = dom.create("<div>NewNode</div>")
console.log(div)

dom.append(test, div)

const div3 = dom.create("<div id='parent'></div>")
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Ryuuji')
const title = dom.attr (test, 'title')
console.log(`title: ${title}`)

dom.text(test, '我心上火烫有梦，我肩上飞扬有风，我路上难免有痛，我头上总有星空')
console.log('test:' + dom.text(test))

dom.style(test, {border:'1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid green')

dom.class.add(test, 'red')
dom.class.add(test, 'green')
dom.class.add(test, 'blue')

dom.class.remove(test, 'red')

// boolean值
console.log(dom.class.has(test, 'blue'))
console.log(dom.class.has(test, 'red'))

const fn = () =>{
  console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv) // empty会影响
const testDiv2 = dom.find('#test3')[0]
console.log(dom.find('.red', testDiv2))

console.log(dom.parent(test))
console.log(dom.children(test4))
console.log(dom.siblings(dom.find('#b')[0]))
console.log(dom.next(dom.find('#b')[0]))
console.log(dom.previous(dom.find('#b')[0]))

const t = dom.children(dom.find('#test5')[0])
console.log(t)
dom.each(t, (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(a5))