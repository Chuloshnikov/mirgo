/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';


import { auth } from '@/auth'
import { redirect } from 'next/navigation';


export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default async function StudioPage() {
  
      const session = await auth();
      console.log(session?.user?.email);

      //if (session?.user?.email !== process.env.ADMIN_EMAIL) {
     //     redirect("/");
      //}

      

  return <NextStudio config={config} />
}
