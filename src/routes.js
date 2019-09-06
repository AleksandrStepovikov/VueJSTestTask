import AppHome from '@/components/AppHome';
import Comment from '@/components/Comment/Comment';
import CommentList from '@/components/commentList/CommentList';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome,
        children: [
            {
                path: '',
                name: 'CommentList',
                component: CommentList
            },
            {
                path: '/comment/:id',
                name: 'Comment',
                component: Comment
            }
        ]
    }
];

export default routes;
