import { useState, useEffect } from 'react';

// Custom hook for data fetching
export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // For now, simulate API call delay
        // When ready, uncomment the fetch call:
        // const response = await fetch(url, options)
        // const result = await response.json()

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mock data for now
        const result = { success: true, data: [] };

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

// Custom hook for video data
export const useVideoData = (videoId) => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Mock video data
        const mockData = {
          id: videoId,
          title: 'Sample Video Title',
          description: 'This is a sample video description...',
          views: '1K views',
          uploadDate: '1 day ago',
          likes: '100',
          dislikes: '5',
          channel: {
            name: 'Sample Channel',
            avatar:
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
            subscribers: '10K subscribers',
            verified: false,
          },
          videoUrl:
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1280&h=720&fit=crop&crop=center',
        };

        setVideoData(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchVideoData();
    }
  }, [videoId]);

  return { videoData, loading, error };
};

export default {
  useFetch,
  useVideoData,
};
