


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <video src="https://assets-global.website-files.com/5ff65c460ce39f5ec5681c6a/6559085de7571c0eedbf25af_personal_ai_nyc_final_091023 (1080p)_record-transcode.mp4" loop autoPlay muted className="w-full h-full object-cover fixed z-[-1] brightness-50"></video>
      <main className="relative">{children}</main>
    </div>
  )
}