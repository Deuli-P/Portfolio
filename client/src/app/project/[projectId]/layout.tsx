import { ErrorBoundaryHandler } from 'next/dist/client/components/error-boundary'
import React from 'react';
import Page from './page';
import Error from './error';
import CTA from './../../../components/CTA';

type paramsType ={
    params: {
        projectId: string;
    }
}

export default function layout({params}:paramsType) {

    const id:string = params.projectId;
  return (
    <>
        <ErrorBoundaryHandler fallback={<Error />}>
            <nav>
                <CTA>
                    <a href='#contact' className='flex gap-2 items-center '  >
                        <span className='text-background'>Contact moi</span>
                    </a>
                </CTA> 
            </nav>
            <Page params={id}/>
        </ErrorBoundaryHandler>
    </>
  )
}

