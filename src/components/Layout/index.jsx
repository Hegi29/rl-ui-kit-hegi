import React from 'react';

const Layout = () => {
  return (
    <>
      <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
        <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
          <div class="sticky top-0 p-4 w-full h-full">
          </div>
        </div>
        <main role="main" class="w-full flex-grow pt-1 px-3">
        </main>
        <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
          <div class="flex sm:flex-col px-2">
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
