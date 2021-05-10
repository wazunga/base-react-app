import React from 'react'

export const ContentHome = () => {
  const ContentParrafo = ({ children }) => (
    <div className="w-full pt-16 md:px-24 lg:px-8 text-justify">{children}</div>
  )
  const ContentHomeMain = ({ children }) => (
    <div className="flex flex-col justify-between lg:flex-row px-10 mb-auto">
      {children}
    </div>
  )
  return (
    <ContentHomeMain>
      <ContentParrafo>
        Felis. Donec aliquet, erat eu ultrices tincidunt, lorem mi sagittis
        lectus, ut feugiat pede lacus quis sapien. Suspendisse porta, felis a
        fermentum interdum, dui nisl sodales felis, ut fermentum sapien nibh.
        Semper nulla in ipsum. Integer elit. In pharetra lorem vel ante. Sed sed
        justo. Curabitur consectetuer arcu. Etiam placerat est eget odio. Nulla
        facilisi. Nulla facilisi. Mauris non neque. Suspendisse et diam. Sed
        vestibulum malesuada ipsum. Cras id magna. Nunc pharetra velit vitae
        eros. Vivamus ac risus. Mauris ac pede laoreet felis. Lorem. Duis non
        pede et neque luctus tincidunt. Duis interdum tempus elit. Aenean metus.
        Vestibulum ac lacus. Vivamus porttitor, massa ut hendrerit bibendum,
        metus augue aliquet turpis, vitae pellentesque velit est vitae metus.
        Duis eros enim, fermentum at, sagittis id, lacinia eget, tellus. Nunc
        consequat pede et nulla. Donec nibh. Pellentesque cursus. Felis. Donec
        aliquet, erat eu ultrices tincidunt, lorem mi sagittis lectus, ut
        feugiat pede lacus quis sapien. Suspendisse porta, felis a fermentum
        interdum, dui nisl sodales felis, ut fermentum sapien nibh. Semper nulla
        in ipsum. Integer elit. In pharetra lorem vel ante. Sed sed justo.
        Curabitur consectetuer arcu. Etiam placerat est eget odio. Nulla
        facilisi. Nulla facilisi. Mauris non neque. Suspendisse et diam. Sed
        vestibulum malesuada ipsum. Cras id magna. Nunc pharetra velit vitae
        eros. Vivamus ac risus. Mauris ac pede laoreet felis. Lorem. Duis non
        pede et neque luctus tincidunt. Duis interdum tempus elit. Aenean metus.
        Vestibulum ac lacus. Vivamus porttitor, massa ut hendrerit bibendum,
        metus augue aliquet turpis, vitae pellentesque velit est vitae metus.
        Duis eros enim, fermentum at, sagittis id, lacinia eget, tellus. Nunc
        consequat pede et nulla. Donec nibh. Pellentesque cursus.
      </ContentParrafo>
      <ContentParrafo>
        Duis nec tortor. Nullam diam libero, semper id, consequat in,
        consectetuer ut, metus. Phasellus dui purus, vehicula sed, venenatis a,
        rutrum at, nunc. Pellentesque interdum sapien nec neque. Vivamus
        sagittis, sem sit. Sagittis nec, neque. Aenean est urna, bibendum et,
        imperdiet at, rhoncus in, arcu. In hac habitasse platea dictumst.
        Vestibulum blandit dignissim dui. Maecenas vitae magna non felis ornare
        consectetuer. Sed lorem. Nam leo. In eget pede. Donec porta. Etiam
        facilisis. Nam suscipit. Ut consectetuer leo vehicula augue. Aliquam
        cursus. Integer pharetra rhoncus massa. Cras et ligula vel quam
        tristique commodo. Sed est lectus, mollis quis, lacinia id, sollicitudin
        nec, eros. Vestibulum ante. Felis. Donec aliquet, erat eu ultrices
        tincidunt, lorem mi sagittis lectus, ut feugiat pede lacus quis sapien.
        Suspendisse porta, felis a fermentum interdum, dui nisl sodales felis,
        ut fermentum sapien nibh. Semper nulla in ipsum. Integer elit. In
        pharetra lorem vel ante. Sed sed justo. Curabitur consectetuer arcu.
        Etiam placerat est eget odio. Nulla facilisi. Nulla facilisi. Mauris non
        neque. Suspendisse et diam. Sed vestibulum malesuada ipsum. Cras id
        magna. Nunc pharetra velit vitae eros. Vivamus ac risus. Mauris ac pede
        laoreet felis. Lorem. Duis non pede et neque luctus tincidunt. Duis
        interdum tempus elit. Aenean metus. Vestibulum ac lacus. Vivamus
        porttitor, massa ut hendrerit bibendum, metus augue aliquet turpis,
        vitae pellentesque velit est vitae metus. Duis eros enim, fermentum at,
        sagittis id, lacinia eget, tellus. Nunc consequat pede et nulla. Donec
        nibh. Pellentesque cursus.
      </ContentParrafo>
    </ContentHomeMain>
  )
}
