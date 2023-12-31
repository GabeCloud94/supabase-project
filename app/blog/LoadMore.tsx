'use client'
import { useInView } from "react-intersection-observer"

import { useEffect, useState } from "react"
import { fetchBlogPosts } from "@/app/blog/actions"


export function LoadMore() {
  const [offset, setOffset] = useState(2)
  const { ref, inView } = useInView()
  const [posts, setPosts] = useState<any[]>([])
  const from = offset + 1
  const to = from + 3
  

  
  
  useEffect(() => {
    if (inView) {
      fetchBlogPosts( 3, from, to).then((res: any) => {
        setPosts([...posts, ...res])
        setOffset((prev) => prev + 3)
      })
    }
  }, [inView])
  
  return (
    <>
      {posts}
      <div ref={ref} />
    </>
  )
}