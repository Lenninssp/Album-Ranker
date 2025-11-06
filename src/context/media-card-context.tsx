import { createContext, ReactNode, useContext } from "react"


export enum Renderer {
  LIBRARY,
  COMMUNITY,
}

interface MediaCardContextValue {
  renderer: Renderer
}

const MediaCardContext = createContext<MediaCardContextValue | undefined>(undefined)

export function useMediaCardContext() {
  const context = useContext(MediaCardContext);
  if (context === undefined){
    return { renderer: Renderer.LIBRARY};
  }
  return context;
}


interface MediaCardProviderProps {
  children: ReactNode,
  renderer: Renderer,
}


export function MediaCardProvider({
  children, 
  renderer
}: MediaCardProviderProps) {
  return (
    <MediaCardContext.Provider value={{ renderer }}>
      {children}
    </MediaCardContext.Provider>
  )
}

