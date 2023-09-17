from flask import Flask, request, jsonify
from pytube import YouTube
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def download_video():
    data = request.get_json()
    video_url = data["videoURL"]
    resolution = data["resolution"]
    
    try:
        yt = YouTube(video_url)
        if resolution == "audio":
            stream = yt.streams.filter(only_audio=True).first()
        else:
            stream = yt.streams.filter(res=f"{resolution}p").first()
        stream.download()
        return jsonify({"message": "Video berhasil diunduh!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run()
