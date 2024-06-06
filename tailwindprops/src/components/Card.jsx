function Card({ name, designation = "Staff Engineer"}) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://images.pexels.com/photos/21937089/pexels-photo-21937089.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I&apos;ve seen scale on
            large teams. It&apos;s easy to customize, adapts to any design, and the
            build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {designation}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
