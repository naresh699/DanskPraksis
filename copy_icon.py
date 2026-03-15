import os
import shutil

src = '/Users/mac/.gemini/antigravity/brain/cf1aca52-5532-4461-b77c-02156b355de2/pwa_icon_danish_prove_1773519972695.png'
dest_dir = 'public/icons'
os.makedirs(dest_dir, exist_ok=True)
shutil.copy(src, os.path.join(dest_dir, 'icon-192x192.png'))
shutil.copy(src, os.path.join(dest_dir, 'icon-512x512.png'))
print('copied successfully')
