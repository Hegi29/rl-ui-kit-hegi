import React from 'react';

export default function Snackbar() {
  return (
    <>
      <section class="items-center justify-center bg-yellow-200 min-h-screen min-w-full mb-8">
        <div class="items-center pt-24 space-y-4">
          <div
            class="mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-blue-200 p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div class="inline-flex items-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
              This is an info message!
            </div>
            <div class="text-blue-700 cursor-pointer hover:text-blue-800">
              Action(3s)
            </div>
          </div>
          <div
            class="mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-green-200 p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div class="inline-flex items-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              This is a success message!
            </div>
            <div class="text-green-700 cursor-pointer hover:text-green-800">
              Action(3s)
            </div>
          </div>
          <div
            class="mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-red-200 p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div class="inline-flex items-center text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd" />
              </svg>
              This is a error message!
            </div>
            <div class="text-red-700 cursor-pointer hover:text-red-800">
              Action(3s)
            </div>
          </div>
        </div>
        <div class="items-center space-y-4 mt-14">
          <div
            class="mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-gray-50 shadow-lg p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div class="inline-flex items-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
              This is an info message!
            </div>
            <div class="text-blue-700 cursor-pointer hover:text-blue-800">
              <span
                class="flex-shrink-0 inline-flex item-center justify-center border-l-2 border-t-2 border-blue-700 p-1 leading-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          <div
            class="mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-gray-50 shadow-lg p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div class="inline-flex items-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              This is a success message!
            </div>
            <div class="text-green-700 cursor-pointer hover:text-green-800">
              <span
                class="flex-shrink-0 inline-flex item-center justify-center border-l-2 border-t-2 border-green-700 p-1 leading-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          <div
            class="mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-gray-50 shadow-lg p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div class="inline-flex items-center text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd" />
              </svg>
              This is a error message!
            </div>
            <div class="text-red-700 cursor-pointer hover:text-red-800">
              <span
                class="flex-shrink-0 inline-flex item-center justify-center border-l-2 border-t-2 border-red-700 p-1 leading-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
