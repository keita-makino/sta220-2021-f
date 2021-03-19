import axios from "axios";
import { minBy, maxBy } from "lodash";

export const kmeans = async (req, res) => {
  const { vec, prl } = (
    await axios.post(
      "http://localhost:60952/score",
      {
        data: req.body.data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  ).data;
  const plotData = Array(req.body.data.k)
    .fill(0)
    .map((_, index) => index + 1)
    .reduce(
      (prev, curr) => [
        ...prev,
        {
          id: `Group ${curr}`,
          data: vec
            .filter((item) => item.cat === curr)
            .map((item) => ({ articleId: item.id, x: item.PC1, y: item.PC2 })),
        },
      ],
      []
    );
  const range = {
    xMin: minBy(vec, "PC1")["PC1"] * 1.1,
    xMax: maxBy(vec, "PC1")["PC1"] * 1.1,
    yMin: minBy(vec, "PC2")["PC2"] * 1.1,
    yMax: maxBy(vec, "PC2")["PC2"] * 1.1,
  };
  res.send({ range, data: plotData, prl });
};
