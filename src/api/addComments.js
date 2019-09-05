const _comments = [
    { 'id': 1, 'name': 'name1', 'mail': 'aaa@mail.com', 'comment': 'sasdasdg bdjsa  jbashdb ybds as' },
    { 'id': 2, 'name': 'name2', 'mail': 'aaasadasdsadsadasdsadsadasd1@mail.com', 'comment': 'sasdasdg bdjsa  jbashdb ybds assasdasdg bdjsa  jbashdb ybds assasdasdg bdjsa  jbashdb ybds assasdasdg bdjsa  jbashdb ybds assasdasdg bdjsa  jbashdb ybds assasdasdg bdjsa  jbashdb ybds as' },
    { 'id': 3, 'name': 'name3', 'mail': 'aaa2@mail.com', 'comment': 'sasdasdg bdjsa  jbashdb ybds as' },
];

export default {
    getComments (cb) {
        setTimeout(() => cb(_comments), 100);
    },

    addComment (comment, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb();
        }, 100);
    }
};