import React from "react";
import { useTranslation } from "react-i18next";
import { FaAward, FaRegBuilding } from "react-icons/fa";
import { GoProject } from "react-icons/go";

export default function Achievements() {

    const { t, i18n } = useTranslation();

    const achievementsData = [

        {
            icon: <FaAward size={40} className="text-[var(--dark-blue-color)]" />,
            value: i18n.language === "ar" ? "15 +" : "+ 15",
            title: t("overview.achievements.cards.years.title"),
        },

        {
            icon: <GoProject size={40} className="text-[var(--dark-blue-color)]" />,
            value: i18n.language === "ar" ? "100 +" : "+ 100",
            title: t("overview.achievements.cards.projects.title"),
        },

        {
            icon: <FaRegBuilding size={40} className="text-[var(--dark-blue-color)]" />,
            value: i18n.language === "ar" ? "10 +" : "+ 10",
            title: t("overview.achievements.cards.sectors.title"),
        },

    ];

    return <React.Fragment>

        <div
            className={`
                    w-full common-p-block common-p-inline grid grid-cols-3 max-[835px]:grid-cols-2 max-[540px]:grid-cols-1
                    ${i18n.language === "ar" ? "bg-gradient-to-r" : "bg-gradient-to-l"}
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)]
                `}
        >

            {achievementsData.map((achievement, index) => (
                <div 
                    key={index} 
                    className="
                        py-5 rounded-lg text-center text-[var(--white-color)] flex flex-col items-center gap-2.5 
                        max-[835px]:last:col-span-2 max-[540px]:last:col-span-1
                    "
                >
                    <p className="text-5xl font-bold text-shadow-md">{achievement.value}</p>
                    <h3 className="text-xl font-semibold text-shadow-md">{achievement.title}</h3>
                </div>
            ))}
        </div>

    </React.Fragment>

}
