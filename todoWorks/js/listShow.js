// 1. 인덱스를 클릭한다
// 2. 해당 인덱스에 맡는 리스트가 나온다
const $folders = document.querySelector('#folders');
console.log($folders);

$folders.addEventListener('click', (e) => {
  if (e.target.classList.contains('index1-inside')) {
    const index1 = e.target;
    const theFolder = index1.closest('.folder-frame');
    const list1 = theFolder.querySelector('.list-1');
    const list2 = theFolder.querySelector('.secondList');
    const title1 = theFolder.querySelector('.title1');
    const title2 = theFolder.querySelector('.title2');
    const form1 = theFolder.querySelector('.todo-form');
    list1.classList.replace('hidden', 'show');
    list2.classList.replace('show', 'hidden');
    title1.classList.replace('hidden', 'show');
    title2.classList.replace('show', 'hidden');
    form1.classList.replace('hidden', 'show');
  } else if (e.target.classList.contains('index2-inside')) {
    const index2 = e.target;
    const theFolder = index2.closest('.folder-frame');
    const list1 = theFolder.querySelector('.list-1');
    const list2 = theFolder.querySelector('.secondList');
    const title1 = theFolder.querySelector('.title1');
    const title2 = theFolder.querySelector('.title2');
    const form1 = theFolder.querySelector('.todo-form');
    list2.classList.replace('hidden', 'show');
    list1.classList.replace('show', 'hidden');
    title2.classList.replace('hidden', 'show');
    title1.classList.replace('show', 'hidden');
    form1.classList.replace('show', 'hidden');
  }
});
