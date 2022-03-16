// import React, { useEffect, useState } from 'react';

// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../firebase-config';

// export const Home = () => {
//   const [postLists, setPostList] = useState([]);
//   const postsCollectionRef = collection(db, 'posts');

//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef);
//        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getPosts();
//   });

//   return (
//     <div className="HomePage">
//       {postLists.map((post, i) => {
//         return (
//           <div className="post" key={i}>
//             <div className="postHeader">
//               <div className="title">
//                 <h1>{post.title}</h1>
//               </div>
//             </div>
//             <div className="postTextContainer"> {post.postText} </div>
//             <h3>@{post.author.name}</h3>
//           </div>
//         );
//       })}

//       {/* {postLists.map((post) => {
//         return (
//           <div className="post" key={post.id}>
//             <div className="postHeader">
//               <div className="title">
//                 <h1> {post.title}</h1>
//               </div>
//             </div>
//             <div className="postTextCointainer">{post.postText}</div>
//             <h3>@{post.author}</h3>
//           </div>
//         );
//       })} */}
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

export function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  // line 90 is unicode to enable a trashcan like image to represent a delete button
  // side note, there was an error that occured would be smart to keep an eye on firebase, ...
  //...an empty post was inputted into the database when reloaded the program after sleeping

  return (
    <div className="homePage">
      {postLists.map((post, i) => {
        return (
          <div className="post" key={i}>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {' '}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
