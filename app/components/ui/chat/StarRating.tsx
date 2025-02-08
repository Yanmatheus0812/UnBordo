import React, { useState, useRef } from "react";
import { View, PanResponder, TouchableOpacity } from "react-native";
import StarWhite from "@/assets/images/StarWhite";
import StarGold from "@/assets/images/StarGold";

interface StarRatingProps {
  maxStars?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ maxStars = 5, size = 40 }) => {
  const [rating, setRating] = useState(0); // Hover (avaliação temporária)
  const [finalRating, setFinalRating] = useState(0); // Avaliação fixa

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        const { locationX } = event.nativeEvent;
        const starWidth = size + 10; // Tamanho da estrela + espaçamento
        const newRating = Math.min(maxStars, Math.max(0, Math.ceil(locationX / starWidth)));
        setRating(newRating);
      },
      onPanResponderRelease: () => {
        setFinalRating(rating); // Define a avaliação final ao soltar o dedo
      },
    })
  ).current;

  return (
    <View style={{ flexDirection: "row", padding: 10 }} {...panResponder.panHandlers}>
      {Array.from({ length: maxStars }, (_, index) => {
        if (index < finalRating) {
          return <StarGold key={index} size={size} />;
        } else if (index < rating) {
          return <StarGold key={index} size={size} />;
        } else {
          return (
            <TouchableOpacity key={index} onPress={() => setFinalRating(index + 1)}>
              <StarWhite size={size} />
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default StarRating;
