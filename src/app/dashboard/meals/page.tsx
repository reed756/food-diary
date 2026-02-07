import { MEALTYPE } from '@/app/lib/definitions';

export default function Page() {
  const meals = [
    {
      id: 0,
      day_id: 0,
      type: MEALTYPE.BREAKFAST,
      createdAt: new Date(),
      updatedAt: new Date(),
      foods: [
        {
          id: 0,
          meal_id: 0,
          name: 'Oatmeal',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    },
    {
      id: 1,
      day_id: 0,
      type: MEALTYPE.LUNCH,
      createdAt: new Date(),
      updatedAt: new Date(),
      foods: [
        {
          id: 1,
          meal_id: 1,
          name: 'Salad',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    },
    {
      id: 2,
      day_id: 0,
      type: MEALTYPE.DINNER,
      createdAt: new Date(),
      updatedAt: new Date(),
      foods: [
        {
          id: 2,
          meal_id: 2,
          name: 'Steak',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Meals</h1>
      {meals.map((meal) => {
        return (
          <div key={meal.id}>
            <h2>{meal.type}</h2>
            <ul>
              {meal.foods.map((food) => {
                return <li key={food.id}>{food.name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
