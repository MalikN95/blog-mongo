var instance = M.Tabs.init(document.querySelectorAll('.tabs'))

const postFormBtn = document.querySelectorAll('.post-btn')

if (postFormBtn) {
    postFormBtn.forEach(e => {
        e.onclick = (event) => {
            const delelem = event.target.parentNode.parentNode.parentNode
            console.log(delelem);
            if (event.target.classList.contains('post-btn') && event.target.dataset) {
                axios({
                    method: 'delete',
                    url: '/user-posts',
                    data: {
                      postId: event.target.dataset.delelem
                    }
                })
                .then( (res) => {
                    delelem.remove()
                })
            }
        }
    })
}

const postDate = document.querySelectorAll('.card-date')
if (postDate) {
    postDate.forEach( (e) => {
        e.textContent = 'Дата: ' + (moment(e.textContent).format('DD.MM.YYYY'));
    })
}    