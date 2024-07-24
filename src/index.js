import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Root from './routes/root';
import VideoPage from'./routes/videoPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
  },
  {
    path:"/:videoId",
    element: <VideoPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router= { router } />
  
)