export default function Player(){
  // Simple media player placeholder
  return (
    <div className="card flex items-center justify-between p-4">
      <div className="text-sm font-medium">Meeting Recording</div>
      <audio controls className="w-full max-w-md">
        <source src="" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
